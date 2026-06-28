document.querySelectorAll('.link-card').forEach(link => {
    link.addEventListener('click', function (e) {
        const name = this.innerText.trim().split(' ')[0];
        let cliques = JSON.parse(localStorage.getItem('cliques') || '{}');
        cliques[name] = (cliques[name] || 0) + 1;
        localStorage.setItem('cliques', JSON.stringify(cliques));
        console.log('${nome}: ${cliques[nome]} cliques');
    });
});

window.addEventListener('DOMcontentLoaded', () => {
    const cliques = JSON.parse(localStorage.getItem(cliques) || '{}');
    console.log('Estatística de cliques:');
    for (const [nome, total] of Object.entries(cliques)) {
        console.log('   ${nome}: ${total} cliques');
    }
})