import Swal from 'sweetalert2';
import '../styles/Interactive.css';
const Interactive = () => {

    const hoverMe = (title) => {
        console.log(title);
        const books = `Magic book encompass a wide array of literature that delves into the mystical, the enchanted, and the fantastical.`;
        const tap = `You can read the book and tap the character to see the animation.`;
        const fairy = `Fairy will guide you how to use and interact with story book`;

        if (title == "books") {
            Swal.fire({
                title: `${books}`,
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
        }
        else if (title === "tap") {
            Swal.fire({
                title: `${tap}`,
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
        }
        else if (title === "fairy") {
            Swal.fire({
                title: `${fairy}`,
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
        }
    }
    return (
        <div className='w-full h-screen'>
            <div className='hidden lg:flex justify-center' style={{ width: "100%", flexDirection: "column" }}>
                <div style={{ margin: "50px" }}>
                    <h1 className='text-white text-center text--gradient'>Light Your Path Forward</h1>
                </div>
                <div style={{ width: "70%", display: "block", margin: "0 auto" }}>
                    <div className='flex justify-between'>
                        <div style={{ width: "200px", boxShadow: "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px", textAlign: "center", padding: "50px", borderRadius: "10px" }} className='max-w-xs transition duration-500 ease-in-out hover:scale-110' onClick={() => hoverMe("books")}>
                            <img src='/img/magic-book.png' alt='magic book' style={{ width: '100px', margin: 'auto' }} />
                            <p style={{ color: "white", marginTop: "10px" }}>Magic Books</p>
                        </div>
                        <div style={{ width: "200px", boxShadow: "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px", textAlign: "center", padding: "50px", borderRadius: "10px" }} className='max-w-xs transition duration-500 ease-in-out hover:scale-110' onClick={() => hoverMe("fairy")}>
                            <img src='/img/fairy.png' alt='Fairy' style={{ width: '100px', margin: 'auto' }} />
                            <p style={{ color: "white", marginTop: "10px" }}>Fairy</p>
                        </div>
                        <div style={{ width: "200px", boxShadow: "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px", textAlign: "center", padding: "50px", borderRadius: "10px" }} className='max-w-xs transition duration-500 ease-in-out hover:scale-110' onClick={() => hoverMe("tap")}>
                            <img src='/img/tap.png' alt='hand tap' style={{ width: '100px', margin: 'auto' }} />
                            <p style={{ color: "white", marginTop: "10px" }}>Interactive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interactive