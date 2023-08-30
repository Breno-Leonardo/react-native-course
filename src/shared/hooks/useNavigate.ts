import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export const useNavigate = () => {
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();

  const navigateTo=(name:string,index?:number)=>{
    let num=0
    if(index && index>0){
        num=index
    }
    reset({
        index: num,
        routes: [{name: name}],
      });
  }

  return{
    reset,
    navigateTo
  }
};

export default useNavigate;
