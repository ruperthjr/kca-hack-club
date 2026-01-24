<script lang="ts">
    import { onMount } from 'svelte';

    let isDark = $state(false);
    let mounted = $state(false);

    onMount(() => {
        // Check localStorage first, then system preference
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            isDark = true;
        } else if (storedTheme === 'light') {
            isDark = false;
        } else {
            // Check system preference
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        // Sync with DOM
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        mounted = true;
    });

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
</script>

{#if mounted}
    <button
        onclick={toggleTheme}
        class="flex h-8 w-16 items-center rounded-full bg-neutral-200 p-1 shadow-lg transition-colors focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-neutral-700"
        aria-label="Toggle Dark Mode"
        aria-pressed={isDark}
    >
        <span
            class="relative flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out {isDark
                ? 'translate-x-8'
                : 'translate-x-0'}"
        >
            {#if isDark}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4 text-neutral-700"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4 text-neutral-400"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                </svg>
            {/if}
        </span>
    </button>
{/if}