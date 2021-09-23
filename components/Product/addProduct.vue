<template>
  <div class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label for="" :class="valError.name? 'text-red-800': 'text-gray-100'" class=" font-bold text-lg mb-2 ">Name:</label>
            <input :class="valError.name ? 'border border-red-700 rounded-full ': ''" type="text" @change="clearErrors" required v-model="form.name" placeholder="Enter Product name" class="w-full px-2 text-gray-700 rounded-full py-1 outline-none" >
            <p v-show="valError.name" class="text-red-800 font-small py-1">{{valError.name ? valError.name[0] : ""}}</p>
        </div>
        <div class=" py-2 flex flex-col">
            <label :class="valError.code? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Code:</label>
            <input :class="valError.code ? 'border border-red-700 rounded-full ': ''" type="text" v-model="form.code" placeholder="Enter code" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.code" class="text-red-800 font-small py-1">{{valError.code ? valError.code[0] : ""}}</p>
        </div>
        <div class=" py-2 flex flex-col">
            <label :class="valError.category_id? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Category:</label>
            <select v-model="form.category_id" class="w-full outline-none px-2 text-gray-700 rounded-full py-1">
                <option selected disabled value="">Select A Category</option>
                <option v-for="cat in categorys"  :key="cat.id" :value="cat.id">{{cat.name}}</option>
            </select>
            <p v-show="valError.category_id" class="text-red-800 font-small py-1">{{valError.category_id ? valError.category_id[0] : ""}}</p>
        </div>
        <div class=" py-2 flex flex-col">
            <label :class="valError.unit_id? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Unit:</label>
            <select :class="valError.unit_id ? 'border border-red-700 rounded-full ': ''" v-model="form.unit_id" class="w-full outline-none px-2 text-gray-700 rounded-full py-1">
                <option selected disabled value="">Select A Unit</option>
                <option v-for="u in units"  :key="u.id" :value="u.id">{{u.name}}</option>
                <p v-show="valError.unit_id" class="text-red-800 font-small py-1">{{valError.unit_id ? valError.unit_id[0] : ""}}</p>
            </select>
             <p v-show="valError.unit_id" class="text-red-800 font-small py-1">{{valError.unit_id ? valError.unit_id[0] : ""}}</p>
        </div>
        <div class=" py-2 flex justify-between items-center">
          <div>
            <label :class="valError.image? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Image:</label>
            <input :class="valError.image ? 'border border-red-700 rounded-full ': ''" type="file" @change="getImage" placeholder="Enter image" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.image" class="text-red-800 font-small py-1">{{valError.image ? valError.image[0] : ""}}</p>
          </div>
                <img
                    v-show="imagePreviewURL"
                    :src="imagePreviewURL"
                    class="w-24 h-12 object-contain"
                />  
        </div>
        <div class=" py-2 flex flex-col">
            <label for="" class=" font-bold text-lg mb-2 ">Description:</label>
            <textarea v-model="form.description" class="resize border rounded-md outline-none px-2 py-1 text-gray-700"></textarea>
        </div>
        <div class=" py-2">
          
            <label :class="valError.quantity? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Quantity:</label>
            <input :class="valError.quantity ? 'border border-red-700 rounded-full ': ''" type="number" min="0"  v-model="form.quantity" placeholder="Enter Quantity" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.quantity" class="text-red-800 font-small py-1">{{valError.quantity ? valError.quantity[0] : ""}}</p>
        </div>
        <div class=" py-2">
          
            <label :class="valError.price? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Price:</label>
            <input :class="valError.price ? 'border border-red-700 rounded-full ': ''" type="number" min="0"  v-model="form.price" placeholder="Enter price" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.price" class="text-red-800 font-small py-1">{{valError.price ? valError.price[0] : ""}}</p>
        </div>
        <div class=" py-2">
            <label :class="valError.alert_quantity? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Alart Quantity:</label>
            <input :class="valError.alert_quantity ? 'border border-red-700 rounded-full ': ''" type="number" min="0" v-model="form.alert_quantity" placeholder="Enter Alart Quantity" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.alert_quantity" class="text-red-800 font-small py-1">{{valError.alert_quantity ? valError.alert_quantity[0] : ""}}</p>
        </div>
          <div class=" py-2 flex flex-col">
            <label for="" class=" font-bold text-lg mb-2 ">status:</label>
            <select v-model="form.status" class="w-full outline-none px-2 text-gray-700 rounded-full py-1">
                <option selected disabled value="">Select A status</option>
                <option  value="1">Active</option>
                <option  value="0">UnActive</option>
            </select>
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
      categorys: [],
      valError: {},
      units: [],
      imagePreviewURL: null,
      id: '',
      form :{
        name: '',
        category_id: '',
        unit_id: '',
        description: '',
        image: '',
        quantity: '',
        price: '',
        alert_quantity: '',
        status: '',
        code: '',
        
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
    getImage (e) {
      const file = e.target.files[0]
      this.form.image = file
      if (file) {
        this.imagePreviewURL = URL.createObjectURL(file);
        URL.revokeObjectURL(file); 
      } else {
        this.imagePreviewURL =  null
      }
    },

    fromReset () {
          this.form.name = '',
          this.form.code = '',
          this.id = '',
          this.imagePreviewURL = null
          this.form.image = '',
          this.form.description = '',
          this.form.category_id = '',
          this.form.unit_id = '',
          this.form.quantity = '',
          this.form.price = '',
          this.form.alert_quantity = '',
          this.form.status = ''
    },

    async store () {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        const formData = new FormData();

        Object.entries(this.form).forEach(([key, value]) => {
            formData.append(key, value);
            
        });
        await this.$axios.post('/api/product',formData, config).then((response) => {
          this.fromReset()
          $nuxt.$emit('AddUnitCustomeEvent')
          this.clearErrors()
        }).catch((error) => {
          this.valError = error.response.data.errors
        })
    },

    // update the product 
    async update () {

        await this.$axios.put(`/api/product/${this.id}`, this.form).then((response) => {
          this.fromReset()
          this.isUpdate = !this.isUpdate;
          $nuxt.$emit('AddUnitCustomeEvent')
        }).catch((error) => {
          this.valError = error.response.data.errors
        })
        
    },

  },
   async created() {
        this.$nuxt.$on('onMyEvent', (product) => {
                    this.isUpdate = !this.isUpdate
                    this.form.name = product.name
                    this.form.code = product.code
                    this.id = product.id,
                    this.imagePreviewURL = this.$axios.defaults.baseURL+product.image
                    this.form.description = product.description,
                    this.form.category_id = product.category_id,
                    this.form.unit_id = product.unit_id,
                    this.form.quantity = product.quantity,
                    this.form.price = product.price,
                    this.form.alert_quantity = product.alert_quantity,
                    this.form.status = product.status
                    
        })
        this.$nuxt.$on('cliningUpForm', () => {
                    this.fromReset()          
        })

        await this.$axios.get("/api/category").then((response) => {
            this.categorys = response.data.categorys
            
        })
        await this.$axios.get("/api/unit").then((response) => {
            this.units = response.data.units
            
        })
    },
}
</script>

<style>

</style>