	function start_spec_str(str){
			if(str.length<4){
				return false;
			}
			front=str.substring(0,4);
			if(front=='java'){
				return true;
			}
			else{
				return false;
			}
		}