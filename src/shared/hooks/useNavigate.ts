import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export const useNavigate = () => {
  const {reset, navigate} = useNavigation<NavigationProp<ParamListBase>>();

  const navigateTo=(name:string,hasHistory?:boolean)=>{
    
    if(hasHistory){
      navigate(name)
    }
    else{
      reset({
        index: 0,
        routes: [{name: name}],
      });
    }
  }

  return{
    reset,
    navigateTo
  }
};

export default useNavigate;
