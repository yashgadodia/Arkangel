<template>
    <li class="list-none shadow-md">
        <div class="grid grid-flow-col grid-cols-6 gap-1 py-5 pl-3">
            <div>{{id}}</div>
            <div>{{fullname}}</div>
            <div>{{address}}</div>
            <div>{{dob}}</div>
            <div>{{emergencyContact}}</div>
            <div><button onclick="location.href='http://www.google.com'">Click me</button></div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        id: String,
        fullname: String,
        address: String,
        dob: String,
        emergencyContact: Number,
        photo: String
    }
}

</script>