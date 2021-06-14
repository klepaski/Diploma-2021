module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>New request</title>
</head>
<body>
<table border="0" cellPadding="0" cellSpacing="0" align="center" style="border-collapse:collapse;border-spacing:0">
    <tbody>
    <tr>
        <td valign="top">
            <div style="display:block;padding:0;margin:0;height:100%;max-height:none;min-height:none;line-height:normal;overflow:visible">
                <table border="0" cellPadding="0" cellSpacing="0" align="center"
                       style="border-collapse:collapse;border-spacing:0;width:742px">
                    <tbody>
                     <tr height="20">
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <img width="50" height="42" src="https://programmerbooking.net/logo_mail.png" alt="Programmerbooking" border="0" style="border:none;padding:0;margin-bottom: 20px" />
                            <br/>
                            <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px;" >New request</div>
                            <div style="font-size: 16px; font-weight: bold; margin-bottom: 20px" >Confirmation time - ${data.confirmationTime}</div>
                         </td>
                    </tr>
                    
                    <tr style="font-size: 20px;">
                        <td>
                        <table width="660"  border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <td style="width: 44px; height: 44px">
                                    <img src="${data.userPhotoURL}" alt="img" style="width: 44px; height: 44px; border-radius: 22px" />
                                </td>
                                <td>
                                    <span style="padding-left: 10px; color: #4A4A4A;">${data.userFullname}</span>
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
                        <table width="660"  border="0" cellspacing="0" cellpadding="0">
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
                         <table width="660"  border="0" cellspacing="0" cellpadding="0" style="font-size: 16px; color: #4A4A4A;">
                            <tbody>
                            <tr>
                                <td style="width: 50%; padding-right: 30px;">
                                   <div style="font-weight: bold; padding-bottom: 5px">${data.date}</div>
                                   <div>${data.time}</div>
                                   <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: 10px; margin-bottom: 10px"></div>
                                   <div style="font-weight: bold; padding-bottom: 5px">The offer includes:</div>
                                   <div>${data.includes}</div>
                                   <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: 10px; margin-bottom: 10px;"></div>
                                   <table  border="0" cellspacing="0" cellpadding="0" style="width: 100%">
                                        <tbody>
                                        <tr>
                                            <td style="width: 50%;">
                                                <span>${data.pticeLeft}</span>
                                            </td>
                                            <td style="width: 50%; text-align: right;">
                                                <span>${data.pticeRight}</span>
                                            </td>
                                        </tr>
                                        </tbody> 
                                    </table>
                                </td>
                                <td style="width: 50%;">
                                   <div style="font-weight: bold; padding-bottom: 5px">Location</div>
                                   <div>${data.location}</div>
                                   <div style="font-size: 14px;">${data.locationDetails}</div>
                                   <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: 10px; margin-bottom: 10px"></div>
                                   <div style="font-weight: bold; padding-bottom: 5px">Additional conditions</div>
                                   <div>${data.additional}</div>
                                   <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: 10px;"></div>
                                </td>
                            </tr>
                            </tbody> 
                        </table>
                        </td>
                    </tr>    
                    <tr height="35">
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
            </div>

        </td>
    </tr>
    </tbody>
</table>
</body>
</html>`;
}








