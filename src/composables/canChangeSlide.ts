
import { computed } from 'vue'
import { defineProps, defineEmits } from 'vue'
import type { ListItem } from '../types'

export default function canChangeSlides(linkList: Array<ListItem>, emit: any) {

    const linkListComputed = computed({
        get: () => linkList,
        set: (value) => emit('update:linkList', value),
    })

    function onChangeActiveLink(id: string): void {
        emit('changeActiveLink', id)
    }

    return {
        linkListComputed,
        onChangeActiveLink,
    }
} 