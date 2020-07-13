<template>
    <q-btn label="label" color="amber"></q-btn>
</template>
<script>
export default {
    name: 'MyQuasarButton',
    props: {
        label: {
            type: String,
            required: true,
        }
    }
};
</script>