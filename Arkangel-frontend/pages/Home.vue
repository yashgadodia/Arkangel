<template>
    <div>
        <Navbar />
        <!-- <client-only>
            <Map/>
        </client-only> -->
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
// import Map from "../components/Map"

export default {
    name: "Home",
    components: {
        Navbar,
        // Map
    }
}
</script>