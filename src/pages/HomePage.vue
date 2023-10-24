<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-4">
        <FormComponent />
        <div class="text-center">
          <img class="img-fluid text-center" src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png"
            alt="">
        </div>
      </div>
      <div class="col-8">
        <section class="row">
          <div v-for="gift in gifts" :key="gift.id" class="col-6">
            <GiftsComponent :gift="gift" />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, } from 'vue';
import { AppState } from '../AppState';
import { giftsService } from "../services/GiftsService";
import Pop from '../utils/Pop';
import GiftsComponent from '../components/GiftsComponent.vue';

export default {
  setup() {
    onMounted(getGifts);
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
  components: { GiftsComponent }
}
</script>

<style scoped lang="scss"></style>
