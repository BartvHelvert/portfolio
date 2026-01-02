<script>
  import { asset } from '$app/paths';
  import SocialMediaButtons from "../components/SocialMediaButtons.svelte";
</script>

<section class="hero-section pt-24" aria-labelledby="hero-heading">
  <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-12">
              <div class="w-full md:w-1/2">
                  <img src={asset('/profile.png')}
                       alt="Bart van Helvert"
                       class="profile-image rounded-full w-64 h-64 object-cover object-[20%_75%] mx-auto shadow-lg profile-border"
                       width="2160"
                       height="1440"
                       loading="eager"/>
              </div>
              <div class="w-full md:w-1/2 text-center md:text-left">
                  <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
                      <h1 id="hero-heading" class="text-5xl font-bold text-primary m-0 leading-none">Bart van Helvert</h1>
                      <div class="flex items-center gap-4" style="margin-top: 0.125rem;">
                          <SocialMediaButtons url="https://github.com/BartvHelvert" ariaLabel="GitHub Profile" iconClass="fab fa-github" />
                          <SocialMediaButtons url="https://www.linkedin.com/in/bartvhelvert/" ariaLabel="LinkedIn Profile" iconClass="fab fa-linkedin" />
                          <SocialMediaButtons url="https://x.com/BartvHelvert" ariaLabel="X Profile" iconClass="fab fa-x-twitter" />
                      </div>
                  </div>
                  <h2 class="text-3xl mb-8 text-accent">Engineering Lead at JetBrains</h2>
                  <p class="text-xl mb-8 text-secondary">I drive the development of world-class Java tooling used by millions of developers worldwide.</p>
              </div>
          </div>
      </div>
  </div>
</section>

<style>
  .profile-image {
    border: 2px solid #7F52FF;
  }
</style>