// *** ACCORDEON ***


// *** ACCORDEON ***

document.addEventListener('DOMContentLoaded', () => {
    const accord = document.querySelector('.accordeon');
    if (!accord) return;

    const detailsList = [...accord.querySelectorAll('details')];

    detailsList.forEach(details => {
        const summary = details.querySelector('summary');
        // wrapper pour animer la hauteur du contenu
        let wrapper = details.querySelector('.details-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'details-wrapper';
            // déplacer tous les noeuds après le summary dans le wrapper
            while (summary.nextSibling) wrapper.appendChild(summary.nextSibling);
            details.appendChild(wrapper);
        }

        // style d'animation : hauteur + easing "cubic-out"
        wrapper.style.overflow = 'hidden';
        wrapper.style.transition = 'height 350ms cubic-bezier(0.215,0.61,0.355,1)';
        wrapper.style.height = details.open ? `${wrapper.scrollHeight}px` : '0px';

        const openThis = () => {
            // fermer les autres
            detailsList.forEach(d => {
                if (d !== details && d.open) {
                    const w = d.querySelector('.details-wrapper');
                    w.style.height = `${w.scrollHeight}px`;
                    requestAnimationFrame(() => (w.style.height = '0px'));
                    d.open = false;
                }
            });

            // ouvrir celui-ci : set open pour rendre le contenu mesurable
            wrapper.style.height = '0px';
            details.open = true;
            requestAnimationFrame(() => (wrapper.style.height = `${wrapper.scrollHeight}px`));
        };

        const closeThis = () => {
            // animer vers 0 puis marquer fermé à la fin
            wrapper.style.height = `${wrapper.scrollHeight}px`;
            requestAnimationFrame(() => (wrapper.style.height = '0px'));
            const onEnd = () => {
                details.open = false;
                wrapper.removeEventListener('transitionend', onEnd);
            };
            wrapper.addEventListener('transitionend', onEnd);
        };

        summary.addEventListener('click', e => {
            e.preventDefault();
            if (details.open) closeThis(); else openThis();
        });

        // une fois ouvert complètement, passer la hauteur en 'auto' pour s'adapter au contenu
        wrapper.addEventListener('transitionend', () => {
            if (details.open) wrapper.style.height = 'auto';
        });
    });
});
