import React from 'react'
import {Link} from 'react-router-dom'
import '../css/admin.css'

const Admin = () => {
    return (
            <section id="admin">
            
                <div className="admin-panel-container">
                    <ul className="admin-ul">
                        <Link to='/admin/posts'><li>Posts <i class="fas fa-clipboard"></i></li></Link>
                        <Link to='/admin/users'><li>Users <i class="fas fa-users"></i></li></Link>
                    </ul>
                </div>
            </section>
)}

export default Admin
