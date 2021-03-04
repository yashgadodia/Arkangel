<template>
    <li class="list-none shadow-md">
        <div class="grid grid-flow-col grid-cols-6 gap-1 py-5 pl-3">
            <div>{{username}}</div>
            <div>{{userId}}</div>
            <div>{{locationOfAlert}}</div>
            <div>{{timeAlerted}}</div>
            <div>{{timeDispatched}}</div>
            <div>{{timeResolved}}</div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        username: String,
        userId: Number,
        locationOfAlert: String,
        timeAlerted: String,
        timeDispatched: String,
        timeResolved: String
    }
}

</script>