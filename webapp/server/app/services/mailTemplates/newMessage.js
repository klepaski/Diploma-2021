module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>New Message</title>
</head>
<body>
    <table  border="0" cellspacing="0" cellpadding="0" align="center" style="width: 600px; margin: 0 auto; background: #FFFFFF; color: rgba(1, 1, 1, 0.7);">
        <tbody>
            <tr height=30">
                <td></td>
            </tr>
            <tr>
                <td> <img src="https://programmerbooking.net/logo_mail.png" /></td>
               
            </tr>
            <tr height=20">
                <td></td>
            </tr>
            <tr style="font-size: 20px; font-weight: bold;">
                <td><span>You have a new message</span></td>
            </tr>
           <tr height=20">
                <td></td>
            </tr>
            <tr style="font-size: 20px; padding-bottom: 20px">
                <td>
                    <table  border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="width: 44px; height: 44px">
                                <img src="${data.senderPhoto}" alt="img" style="width: 44px; height: 44px; border-radius: 22px" />
                            </td>
                        <td><span style="padding-left: 10px; color: #4A4A4A;">${data.senderFullName}</span></td>
                    </tr>
                        </tbody> 
                    </table>
                </td>
            </tr>       
            <tr>
                <td><span>${data.date}</span></td>
            </tr> 
             <tr>
                <td><span>${data.text}</span></td>
            </tr> 
            <tr height=50">
                <td></td>
            </tr>
             <tr>
                <td>
                    <a style="text-decoration: underline" href="${data.bookingLink}">
                        <button style="background: #ffffff; border: 1px solid #4000C8; border-radius: 5px; height: 46px; line-height: 46px; padding-left: 20px; padding-right: 20px; color: #6436C7; width: 150px; font-size: 15px; cursor: pointer;">Answer</button>
                    </a>
                </td>
            </tr> 
        </tbody>
    </table>
</body>
</html>`;
}


