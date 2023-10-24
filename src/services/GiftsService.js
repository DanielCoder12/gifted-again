import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        // logger.log('response', res.data)
        const newGifts = res.data.map(pojo => new Gift(pojo))
        // logger.log('new gifts', newGifts)
        AppState.gifts = newGifts
        // logger.log('appstate', AppState.gifts)
    }

    flipBool(giftId) {
        const gift = AppState.gifts.find(gift => gift.id == giftId)
        gift.opened = !gift.opened

    }

    async createGift(tagData, urlData) {
        const payload = { tag: tagData, url: urlData }
        logger.log(payload)
        const res = await api.post('api/gifts', payload)
        logger.log('response', res.data)
        await AppState.gifts.push(new Gift(res.data))

    }
}

export const giftsService = new GiftsService()