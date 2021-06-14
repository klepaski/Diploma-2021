const logger = require('./logger');
const config = require('./../config');

class AppError extends Error {

  constructor(settings) {
    super();

    // Ensure that settings exists to prevent refernce errors.
    settings = (settings || {});

    // Override the default name property (Error). This is basically zero value-add.
    this.name = "AppError";

    // Since I am used to ColdFusion, I am modeling the custom error structure on the
    // CFThrow functionality. Each of the following properties can be optionally passed-in
    // as part of the Settings argument.
    // --
    // See CFThrow documentation: https://wikidocs.adobe.com/wiki/display/coldfusionen/cfthrow
    this.type = (settings.type || "Application");
    this.message = (settings.message || "");
    this.status = (settings.status || 500);
    this.err = (settings.err || {});

    if (((config.env === 'development') || (+this.status === 500)) && this.message !== 'YOU_VERSION_IS_LAST') {
      logger.error(new Date());
      logger.error(this.stack);
      logger.error(this.err.stack || this.err);
    }

    // This is just a flag that will indicate if the error is a custom AppError. If this
    // is not an AppError, this property will be undefined, which is a Falsey.

    // Capture the current stacktrace and store it in the property "this.stack". By
    // providing the implementationContext argument, we will remove the current
    // constructor (or the optional factory function) line-item from the stacktrace; this
    // is good because it will reduce the implementation noise in the stack property.
    // --
    // Rad More: https://code.google.com/p/v8-wiki/wiki/JavaScriptStackTraceApi#Stack_trace_collection_for_custom_exceptions
  }

  toJSON() {
    return {
      message: this.message,
      stack: this.stack,
      error: (JSON.stringify(this.err) !== JSON.stringify({})) ? {
        message: this.err.message,
        stack: this.err.stack,
        error: this.err.stack ? this.err.error : this.err
      } : {}
    };
  }
}

module.exports = AppError;
