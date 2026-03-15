const filterWeb = document.getElementById('filter-web');
        const filterRrss = document.getElementById('filter-rrss');
        const projectsWeb = document.getElementById('projects-web');
        const projectsRrss = document.getElementById('projects-rrss');

        const setActive = (active) => {
            const isWeb = active === 'web';
            projectsWeb.classList.toggle('hidden', !isWeb);
            projectsRrss.classList.toggle('hidden', isWeb);

            filterWeb.classList.toggle('bg-[var(--gris)]', isWeb);
            filterWeb.classList.toggle('text-[var(--blanco)]', isWeb);
            filterWeb.classList.toggle('bg-[var(--blanco)]', !isWeb);
            filterWeb.classList.toggle('text-[var(--gris)]', !isWeb);

            filterRrss.classList.toggle('bg-[var(--gris)]', !isWeb);
            filterRrss.classList.toggle('text-[var(--blanco)]', !isWeb);
            filterRrss.classList.toggle('bg-[var(--blanco)]', isWeb);
            filterRrss.classList.toggle('text-[var(--gris)]', isWeb);
        };

        filterWeb.addEventListener('click', () => setActive('web'));
        filterRrss.addEventListener('click', () => setActive('rrss'));