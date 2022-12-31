import {ref} from "vue";
import getData from "../Services/get/getData";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const toast = useToast();
const router = useRouter();
import axios from "axios"



export const useUserData = ()=>{
    const loading = ref<boolean>(true);
let user = ref({
  username: "",
  profilePic: "",
  email:"",
  bio:"",
  links: [
    {
      title: "",
      link: "",
      _id: "",
    },
  ],
});
    const getUserData = () => {
      let token =localStorage.getItem("auth.linkbum")
      axios.defaults.headers.common['Authorization'] = `${token}`
        getData(`api/user/me`)
          .then((result) => {
            loading.value = false;
            user.value = result.data;
          })
          .catch((err) => {
            loading.value = false;
            if (err.response.status === 404) {
              toast.error("User not found, redirected to homepage", {
                timeout: 3000,
              });
              router.push("/");
            } else {
              toast.error("Something went wrong, please try again", {
                timeout: 3000,
              });
              router.push("/");
            }
          });
      
    };
    return { getUserData, user, loading}
}