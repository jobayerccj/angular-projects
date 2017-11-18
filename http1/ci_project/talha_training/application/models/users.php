<?php

class Users extends CI_Model {
    
     function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    
    
    function insert_member($data){ 
        
        $new_data['name'] = $data['name'];
        $new_data['email'] = $data['email'];
        $new_data['phone'] = $data['phone'];
        $new_data['image'] = $data['image'];
        
        $this->db->insert('member', $new_data);
    }
    
    function all_member(){ 

        $this->db->select('*');
        $this->db->from('users');
        
        $query = $this->db->get();        
        return $query->result_array();       
    }
    
}
