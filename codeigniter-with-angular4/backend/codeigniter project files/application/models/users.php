<?php

class Users extends CI_Model {
    
     function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    
    
    function insert_member($data){ 
        
        if($data){
            $new_data['name'] = $data->name;
            $this->db->insert('users', $new_data);
            return $this->db->insert_id();
        }
        
    }
    
    function all_member(){ 

        $this->db->select('*');
        $this->db->from('users');
        
        $query = $this->db->get();        
        return $query->result_array();       
    }
    
}
