<script>
    import { page } from '$app/stores';
</script>

<header>
    <nav>
        <ul>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">Home</a>
            </li>
            <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>

</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3em;
        background: radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(2, 72, 78, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
    }

    nav {
        display: flex;
        justify-content: center;
        border-radius: 80px;
    }



    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
        text-align: center;
    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: large;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>
