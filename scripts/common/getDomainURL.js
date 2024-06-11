
/* Pega a URL do domínio atual (ex.: http://localhost)*/

function getDomainURL() {
    const fullDomainURL = window.location.href;
    const domainURL = fullDomainURL.split('/').slice(0, 3).join('/');

    return domainURL;
}

export { getDomainURL }