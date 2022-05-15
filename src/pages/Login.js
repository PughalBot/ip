import React from 'react'

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        
        <div className="h-screen bg-center bg-no-repeat bg-cover flex bg-[url('https://cdn.discordapp.com/attachments/845617551412297748/975016608328212490/bg.png')] w-screen h-screen">
            
            {/* <div className="justify-center w-full px-10">
                <img src="https://cdn.discordapp.com/attachments/845617551412297748/974999383961641000/7.jpg" alt="LOGO"></img>
            </div> */}
            <div className='w-full bg-cover bg-center flex-center flex-row bg-transparent max-w-md m-auto backdrop-blur-md bg-white/20 rounded-lg drop-shadow-2xl py-20 px-16'>
            <div className="flex flex-wrap justify-center">
                <div className="w-44  px-1">
                    <img src="https://cdn.discordapp.com/attachments/845617551412297748/975003921556852746/GROUP_LOGO_6.png" alt="LOGO"/>
                </div>
            </div>
            <h1 className='text-2xl text-white font-serif font-medium mt-10 mb-12 text-center'>
                    STUDENT LOGIN
                </h1>
                

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email' className='text-primary'>Email</label>
                        <input
                            type='email'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='email'
                            placeholder='example@sairamtap.edu.in'
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='text-primary'>Password</label>
                        <input
                            type='password'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-8'}
                            id='password'
                            placeholder='Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-blue cursor-pointer py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;