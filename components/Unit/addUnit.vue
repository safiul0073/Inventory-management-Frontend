<template>
  <div class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label for="" :class="valError.name? 'text-red-800': 'text-gray-100'" class=" font-bold text-lg mb-2 ">Name:</label>
            <input @change="clearErrors" required type="text" v-model="form.name" placeholder="Enter Unit Name" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.name" class="text-red-800 font-small py-1">{{valError.name ? valError.name[0] : ''}}</p>
        </div>
        <div class=" py-2 flex flex-col">
            <label for="" :class="valError.code? 'text-red-800': 'text-gray-100'" class=" font-bold text-lg mb-2 ">Code:</label>
            <input @change="clearErrors" required type="text" v-model="form.code" placeholder="Enter code" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.code" class="text-red-800 font-small py-1">{{valError.code ? valError.code[0] : ''}}</p>
        </div>
        <div class=" py-2 w-full ">
            <button @click="update" v-show="isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Update</button>
            <button @click="store" v-show="!isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Save</button>
        </div>

        
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      isUpdate: false,
      valError: {},
      form :{
        name: '',
        code: '',
        id: ''
      }
    }
  },

  methods: {
    clearErrors () {
      for (var variableKey in this.valError){
          if (this.valError.hasOwnProperty(variableKey)){
              delete this.valError[variableKey];
          }
      }
    },
    fromReset () {
          this.form.name = '',
          this.form.code = '',
          this.form.id = ''
    },
    async store () {
        await this.$axios.post('/api/unit/', this.form).then((response) => {
          this.fromReset()
        }).then((response) => {
          this.fromReset()
          $nuxt.$emit('AddUnitCustomeEvent')
        }).catch((error) => {
          this.valError = error.response.data.errors

        })
    },
    async update () {
        await this.$axios.put(`/api/unit/${this.form.id}`, {
          "method": "POST",
          "name": this.form.name,
          "code": this.form.code
        }).then((response) => {
          this.fromReset()
          this.isUpdate = !this.isUpdate;
          $nuxt.$emit('AddUnitCustomeEvent')
        }).catch((error) => {
          this.valError = error.response.data.errors

        })
        
    },

  },
    created() {
        this.$nuxt.$on('onMyEvent', (category) => {
                    this.isUpdate = !this.isUpdate;
                    this.form.name = category.name;
                    this.form.code = category.code
                    this.form.id = category.id;
                    
        })
        this.$nuxt.$on('cliningUpForm', () => {
                    this.fromReset()          
        })
    },
}
</script>

<style>

</style>