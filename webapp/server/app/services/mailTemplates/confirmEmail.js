module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Confirm email</title>
</head>
<body>
    <table  border="0" cellspacing="0" cellpadding="0" align="center" style="width: 600px; margin: 0 auto; background: #FFFFFF; color: #010101b3;">
        <tbody>
            <tr height="30">
                <td></td>
            </tr>
            <tr>
                <td>
                    <img src="https://programmerbooking.net/logo_mail.png" />
                </td>
            </tr>
            <tr height="20">
                <td></td>
            </tr>
            <tr style="font-size: 20px; font-weight: bold;">
                <td>
                    <span> Verify your new programmerbooking account</span>
                </td>
            </tr>
            <tr height=30">
                <td></td>
            </tr>
            <tr>
                <td>
                    <span style="font-size: 16px;">
                        To verify your email address, please <br>
                        <a style="text-decoration: underline" href="${data.appURL}/api/v1/user/confirmMail?token=${data.token}">
                            <button style="background: #ffffff; border: 1px solid #4000C8; border-radius: 5px; height: 46px; line-height: 46px; padding-left: 20px; padding-right: 20px; color: #6436C7; width: 150px; font-size: 15px; cursor: pointer;">Follow the link</button>
                        </a>
                    </span>
                </td>
            </tr> 
            <tr height=20">
                <td></td>
            </tr> 
             <tr style="height: 20px">
                <td>
                    <span style="font-size: 16px;">
                        Do not share this OTP with anyone. Programmerbooking takes your account security very seriously. 
                        Programmerbooking Customer Service will never ask you to disclose or verify your Programmerbooking password, OTP,
                         credit card, or banking account number. If you receive a suspicious email with a link to update your account information, 
                         do not click on the link—instead, report the email to Programmerbooking for investigation.
                    </span>
                </td>
            </tr>
            <tr height=20">
                <td></td>
            </tr> 
            <tr style="height: 20px">
                <td>
                    <span style="font-size: 16px;" >Thank you for being with us!</span>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;
}


