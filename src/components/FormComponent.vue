<template>
    <div class="component">
        <form @submit.prevent="createGift()">
            <div class="mb-3 p-4 bg-light shadow rounded mt-3">
                <label for="exampleInputEmail1" class="form-label">Write a Gift Tag</label>
                <input v-model="tagData" required type="text" class="form-control" id="exampleInputEmail1">

                <label for="exampleInputEmail1" class="form-label">Add an Image</label>
                <input v-model="urlData" maxlength="500" required type="url" class="form-control" id="exampleInputEmail1">

                <div class="text-end">
                    <button class="btn btn-success mt-3">Submit</button>
                </div>

            </div>
        </form>
    </div>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService';
export default {
    setup() {
        const tagData = ref('')
        const urlData = ref('')
        return {
            tagData,
            urlData,
            async createGift() {
                // logger.log(tagData, urlData)
                await giftsService.createGift(tagData.value, urlData.value)
                tagData.value = ''
                urlData.value = ''
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>