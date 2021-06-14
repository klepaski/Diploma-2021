import Head from 'next/head'

const PageHead = ({title, description, url, imgLink=`` }) => (
    <>
	<Head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='content-language' content='en'/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />

        <title>{title || 'Programmerbooking'}</title>
        <meta name='description' content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={'Programmerbooking'} />
        <meta property="og:title" content={title || 'Programmerbooking'} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgLink} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />

        <link rel="canonical" href={url} />
        <link rel="shortlink" href={url} />

        <meta property="og:type" content="article" />

        <link rel = "stylesheet" type = "text/css" href = "../static/css/image-gallery.css" />
        <link rel = "stylesheet" type = "text/css" href = "../static/css/_datepicker.css" />
        <link rel = "stylesheet" type = "text/css" href = "../static/css/removeProd.css" />


    </Head>

            <style jsx global>{`
                @font-face {
                      font-family: 'CircularProBook';
                      font-style: normal;
                      font-weight: 300;
                      src: url("/static/fonts/CircularPro/CircularPro-Book.otf");
                }
                 @font-face {
                      font-family: 'CircularProBold';
                      font-style: normal;
                      font-weight: 400;
                      src: url("/static/fonts/CircularPro/CircularPro-Bold.otf");
                }
              body, textarea { 
                    margin: 0;
                    font-family: 'CircularProBook';
              }
              
            `}</style>
    </>
);
export default PageHead;