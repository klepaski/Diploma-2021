module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Invite to offer</title>
</head>
<body>
    <table  border="0" cellspacing="0" cellpadding="0" align="center" style="width: 600px; margin: 0 auto; background: #FFFFFF; color: #000000;">
        <tbody>
            <tr height=30">
                <td></td>
            </tr>
            <tr>
                <td><img src="https://programmerbooking.net/logo_mail.png" /></td>
            </tr>
            <tr height=20">
                <td></td>
            </tr>
            <tr style="font-size: 20px;">
                <td><span>Hello!</span></td>
            </tr>
            <tr height=20">
                <td></td>
            </tr>
            <tr style="font-size: 20px;">
                <td>
                    <table  border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="width: 44px; height: 44px">
                                <img src="${data.offerOwnerPhotoURL}" alt="${data.offerOwnerFullname}" style="width: 44px; height: 44px; border-radius: 22px" />
                            </td>
                        <td><span style="padding-left: 10px;">${data.offerOwnerFullname}</span></td>
                    </tr>
                        </tbody> 
                    </table>
                </td>
            </tr>
             <tr height=20">
                <td></td>
            </tr>
            <tr style="font-size: 20px">
                <td>
                    <span>
                                   I’m super excited to invite you to join me and take part in
                   <a style="text-decoration: underline" href="${data.appURL}/offers/${data.offerId}">${data.offerName}</a>
                   <br />
                    Let’s earn money together using our programmers on the <a style="text-decoration: underline" href="programmerbooking.net">programmerbooking.net</a> platform.
    
                </span>
                </td>
            </tr>
            <tr height=50">
                <td></td>
            </tr>
            <tr>
             <td>
                 <a style="text-decoration: underline" href="${data.appURL}/registration?ioid=${data.offerParticipantsId}">
                        <button style="border: 1px solid #4000C8; border-radius: 5px; height: 46px; line-height: 46px; padding-left: 20px; padding-right: 20px; color: #6436C7; width: 150px; font-size: 15px; cursor: pointer;">Agree</button>
                    </a>
              </td>
            </tr>       
           <tr height=50">
                <td></td>
            </tr>
            <tr style="font-size: 14px; color: #00000099">
                <td>
                     <span>
                             Welcome to Programmerbooking - a single place where you can: <br/>
                            - Find excellent programmers that will solve your issues easily <br/>
                            - Ask skilled programmers to help you with studying, if you are student <br/>
                            - Find a new worker quickly, if a worker in your company is ill <br/>
                            - Sell your services as a programmer <br/>
                            - Collaborate with other programmers and find like-minders                    </span>
                </td>
            </tr> 
        </tbody>
    </table>
    
   
</body>
</html>`;
}