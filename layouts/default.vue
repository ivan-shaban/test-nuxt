<template>
  <div class="content">
    <Header />
    <main class="main bg-purple-50">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Nuxt />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}

</style>
