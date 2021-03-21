<template>
    <div class="grid grid-cols-6 gap-2 mx-12">
        <div>
            {{name}}
        </div>
        <div>
            {{phoneNumber}}
        </div>
        <div>
            {{EName}}
        </div>
        <div>
            {{EPhoneNumber}}
        </div>
        <div>
            {{ERelationship}}
        </div>
        <div>
            {{Photo}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        phoneNumber: Number,
        EName: String,
        EPhoneNumber: Number,
        ERelationship: String,
        Photo: String
    }
}
</script>