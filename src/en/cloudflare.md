# How to configure Cloudflare

Cloudflare is a web services platform that protects and accelerates the connection between the user and the website server. It has a free plan and is easy to use.

## Use Cloudflare Nameserver

1. Create an account on Cloudflare and add your domain.
2. Open your account on the domain registrar, use WHOIS if you don't know which registrar it is.
3. Point the two nameservers that will appear in your Cloudflare account; they follow this pattern: x.ns.cloudflare.com.
4. Wait up to 48 hours for the update to happen.
5. After this, you need to configure DNS using the (A) and (CNAME) records if you want to use subdomains.
6. For the A record, you should add the name as `@`, and where it asks for the IPV4, add the server's IP address.
7. If you want to use a `www` subdomain, add a CNAME record and put `www` in the name and `@` in the target.

:::tip Ease of server changes  
With Cloudflare, you don't need to change nameservers every time you need to switch servers. Just update the IPv4 address in the A record, and the propagation takes only 5 minutes. It's like magic! 🪄  
:::

## Configure WAF

1. Open the menu and go to Security -> WAF -> Custom Rules.
2. Create a new rule and name it (Prevent SPAM or DDoS attacks).
3. In the expression display, click on Edit Expression[!TIP].
4. Add the following expression: __(not ip.geoip.country in {"BR"} and not cf.client.bot) or (cf.threat_score gt 30)__ This will challenge all visitors who are not from Brazil, except for known bots (googlebot, facebot, etc.), and visitors with a threat score higher than 30.
5. Choose an action, such as Managed Challenge or Block.
6. Place the rule at the top.
7. Save the settings and run tests with a VPN; configure it to your liking and needs.

:::tip Form security and DDoS protection  
All visitors who do not meet the WAF criteria will be blocked.  
:::

## More

Find the official documentation at [Cloudflare Setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)