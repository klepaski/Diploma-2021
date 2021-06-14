module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Offer info</title>
</head>
<body>
    <table  border="0" cellspacing="0" cellpadding="0" align="center" style="width: 600px; margin: 0 auto; background: #FFFFFF; color: rgba(1, 1, 1, 0.7);">
        <tbody>
            <tr height="30">
                <td></td>
            </tr>
            <tr>
                <td>
                   <img width="50" height="42" src="https://programmerbooking.net/logo_mail.png" alt="Programmerbooking" border="0" style="border:none;padding:0;margin-bottom: 20px" />
                </td>
            </tr>
             <tr height="20">
                <td></td>
            </tr>
            <tr style="font-size: 20px; font-weight: bold;">
                 <td>
                    <span>${data.title}</span>
                 </td>
            </tr>
            <tr height="50">
                <td></td>
            </tr>
            <tr>
                <td>
                    <table  border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="width: 140px; height: 90px; text-align: center; ">
                                <img src="${data.offerPhotoURL}" alt="img" style="height: 90px" />
                            </td>
                            <td style="padding-left: 10px;">
                                <div>${data.category}</div>
                                <div style="color: #4A4A4A; font-size: 20px;">${data.offerName}</div>
                            </td>
                        </tr>
                        </tbody> 
                    </table>
                </td>
            </tr> 
            <tr height="50">
                <td></td>
            </tr>
            <tr>
                <td>
                    <span>${data.date}</span>
                 </td>
            </tr> 
            <tr height="50">
                <td></td>
            </tr>
             <tr>
                <td>
                    <a style="text-decoration: underline" href="${data.bookingLink}">
                        <button style="background: #6436C7; border-radius: 5px; height: 46px; line-height: 46px; padding-left: 20px; padding-right: 20px; color: #ffffff; width: 150px; font-size: 15px; cursor: pointer;">Go to chat</button>
                    </a>
                </td>
            </tr> 
        </tbody>
    </table>
</body>
</html>`;
}


