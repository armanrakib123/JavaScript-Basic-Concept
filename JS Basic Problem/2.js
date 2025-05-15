function sendNotification(email){

    const text=email.indexOf("@");
    const domain=text+1;

    const username=email.substring(0,text);
    const domainname=email.substring(domain);
    
    return username+" sent you an email from "+domainname;

}
const result=sendNotification("rakib@gmail.com");
console.log(result);