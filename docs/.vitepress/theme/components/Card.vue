<template>
  <div class="shader-card" >
    <v-lazy-image :src="banner"/>
    <div class="container">
      <h4>{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
    <a :href="href" class="href-fill"></a>
  </div>
</template>

<script setup>
  import VLazyImage from "v-lazy-image";
</script>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        banner: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
    }
};
</script>

<style>
.shader-card {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  border: 1.5px solid var(--vp-c-gray-3);
  transition: 0.3s;
  overflow: hidden;
  margin-top: 24px;
  position: relative;
}

.shader-card img {
  height: 130px;
  width: 100%;
  object-fit: cover;
}

.shader-card:hover {
  border-color: var(--vp-c-brand-1);
}

.shader-card a.href-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shader-card .container {
  padding: 16px;
} 

.shader-card h4 {
  font-size: 26px;
  margin: 0;
}

.shader-card p {
  margin: 8px 0 0 0;
}

</style>
