<template>
    <div class="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

    <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">

            <Nuxt-Link  to="/">
            <li class="mr-3 flex-1">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
                </a>
            </li>
            </Nuxt-Link>

            <Nuxt-Link to="/category">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Category</span>
                </a>
            </li>
            </Nuxt-Link>
            <Nuxt-Link to="/unit">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Unit</span>
                </a>
            </li>
            </Nuxt-Link>
            <Nuxt-Link to="/product">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Product</span>
                </a>
            </li>
            </Nuxt-Link>
            <Nuxt-Link to="/sale">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Sele Management</span>
                </a>
            </li>
            </Nuxt-Link>
            <Nuxt-Link to="/orders">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Orders</span>
                </a>
            </li>
            </Nuxt-Link>
           
        </ul>
    </div>


</div>
</template>

<script>
export default {

}
</script>

<style>

 .exact-active-link{
    border-bottom: 2px solid #1F45FC;
 }
</style>