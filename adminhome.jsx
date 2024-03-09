<form onSubmit={handleSubmit}>
                <div className='auth-inner'>
                    <h3>Welcome Admin</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Name</th>
                                <th>Name</th>
                                <th>Name</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((user, index) =>
                                {
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.Usertype}</td>
                                        <td>{user.password}</td>
                                        <td><FaTrash onClick={()=>deleteUser(user._id)}/></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>     
                    </table>
                </div>
            </form>