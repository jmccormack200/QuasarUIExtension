<template>
    <q-btn :label="label" color="primary"></q-btn>
</template>
<script>

import { QBtn } from 'quasar'

export default {
    name: 'MyQuasarButton',
    props: {
        label: {
            type: String,
            required: true,
        }
    },
    components: {
        QBtn
    }
};
</script>