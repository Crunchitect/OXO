async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    });
}

var params_list = location.href.split('?')[1].split('&'), args = {};
params_list.forEach((item, index) => {params_list[index] = item.split('=');});
params_list.forEach(
    (item, _) => {
        args[item[0]] = item[1];
    }
)

const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuemN2c2RrcHNuanJ6eHZkbGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NzU1NjEsImV4cCI6MjAwNDA1MTU2MX0.bHkprFvHVmga6UcQagV4ikTqlb3Jlk0uzk993NuwvT8';
// "https://tnzcvsdkpsnjrzxvdlau.supabase.co/rest/v1/OXOAccounts?select=username"

async function sign_up() {
    const usernames = await fetch("https://tnzcvsdkpsnjrzxvdlau.supabase.co/rest/v1/OXOAccounts?select=*", {
        headers: {
            apikey: anon,
            Authorization: `Bearer ${anon}`
        }
    }).then(
        resp => resp.json()
    );
    console.log(usernames);
}

sign_up()