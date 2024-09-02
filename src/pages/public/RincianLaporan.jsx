import {React, useState, useEffect} from "react";
import NavbarPublic from "../../components/navbarPublic";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import HeroPublic from "../../components/HeroPublic";
import LogoMitra from "/images/MItraLogo.png";
import Cards from "../../components/cards";

const Rincian = () => {
    const [Images, setImages] = useState([]);

    const kegiatanItems = [
        { date: "27 Mar, 2023", title: "Judul Laporan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Laporan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "29 Mar, 2023", title: "Judul Laporan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." }
    ];

    useEffect(()=> { {/* untuk set gambar */}
        const loadImage = () => { 
            const img = [];
            for(let i = 1; i <= 10; i++){
                img.push(`/images/img2.png`);
            }
            setImages(img);
        };
        loadImage();
    }, []);

    return(
        <>
            <NavbarPublic />
            <HeroPublic title={"Laporan pengadaan perkakas masak untuk desa"} text={"PT Mitra Berbakti Sekali . Jul 12, 2024"}/>
            <section>
                <div className="w-full px-12 h-full">
                    <div className="header w-full flex flex-col gap-1 items-start justify-start mt-5"> 
                        <div className="h-auto py-[5px] justify-start items-center inline-flex">
                            <div className="w-[3vw] self-stretch border-t-4 border-color-orange" />
                        </div>
                    </div>
                    <div className="w-full items-center justify-center flex p-24">
                        <img src={LogoMitra} alt="" width={300} />
                    </div>
                    <h1 className="text-xl font-semibold">Galeri</h1>
                    <div className="w-full h-auto flex overflow-x-auto gap-2">
                        {Images.map((image, index) => (
                            <img className='m-2' key={index} src={image} alt={`Mitra ${index + 1}`} width={200}/>
                        ))}
                    </div>
                    <div className="flex mt-3 gap-4 w-full justify-center">
                        <div className="flex flex-col items-start gap-3 p-2 w-[20vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                            <p>Realisasi</p>
                            <p className="font-semibold text-md">Rp 10,000,000</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 p-2 w-[30vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                            <p>Nama Proyek</p>
                            <p className="font-semibold text-md">Pengadaan sarana keterampilan Olahan Pangan</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 p-2 w-[25vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                            <p>Kecamatan</p>
                            <p className="font-semibold text-md">Kec. Karangwareng</p>
                        </div>
                    </div>
                    <div className="Rincian p-5">
                        <h1 className="text-lg font-semibold">Rincian Laporan</h1>
                        <div className="max-h-full">
                            <p>Eu venenatis sit elit venenatis. Pretium neque nunc urna auctor lacus. Eu nulla urna in maecenas urna mi auctor et velit. Diam montes tristique donec vitae maecenas at vulputate. Scelerisque ultricies ullamcorper elementum bibendum at enim ac. Vel sed nibh mi donec non metus ipsum. Vel semper et nulla interdum pellentesque at aliquam ipsum condimentum. Porta dolor sed ultrices donec mattis.
                                Sapien venenatis volutpat purus nisi. Scelerisque mauris aenean pharetra erat nibh velit elit. Arcu vitae et id volutpat in mauris enim malesuada. Bibendum magna sapien velit integer porttitor. Vel rhoncus arcu sed ultricies. Nisi placerat nisl eu vitae. Morbi lobortis ullamcorper auctor aliquam quam purus nec. Nulla nullam viverra malesuada ante neque felis in lacus. Eu risus pellentesque aliquam amet et hac. Enim ipsum morbi morbi pellentesque orci erat eget. Sed orci blandit sagittis nisl mauris nisl. Ut placerat faucibus risus dis vitae sem. Commodo quisque dignissim convallis diam urna aliquam. Ut nec erat vel varius turpis senectus purus.
                                Enim ut pellentesque sit enim. Mollis lacus justo justo at feugiat et. Enim pulvinar neque lorem tellus nunc eros id. Mattis nulla in nibh in vel auctor ac nulla diam. Arcu dolor cras nulla fermentum sed hendrerit est lorem eu. In porttitor mauris sit mauris lacinia dolor. Est faucibus turpis quisque amet. Molestie senectus pharetra turpis amet condimentum. Aenean ut nam enim amet amet sit curabitur scelerisque. Pellentesque mi phasellus mi tellus ullamcorper. Consequat nisl phasellus orci fermentum neque aliquam. Condimentum mauris vel porta fringilla in arcu mi proin mauris. Molestie tellus nullam etiam suscipit consectetur. Tempor eget duis tortor dolor montes natoque vestibulum quis. Lorem gravida non amet sed nunc urna massa.
                                Id blandit laoreet mauris nibh nunc aenean. Elementum ultricies vulputate et id vitae tristique egestas. Elementum etiam diam leo tempus ut sit mi. Proin eget eu interdum risus. Lectus aliquam nisi viverra molestie mollis. Id morbi nulla dignissim mi purus adipiscing quis. Nec eget at nulla viverra convallis urna at. A mollis pellentesque nibh pretium ornare risus arcu nisl dolor. Malesuada sed iaculis in odio pellentesque placerat eu. Gravida eu tellus sed amet condimentum eget arcu fringilla. Diam in euismod orci sit. Pellentesque nulla euismod quam eget elementum viverra. Proin dignissim maecenas ultrices justo pellentesque accumsan nisl. Porta justo maecenas neque viverra magna.
                                Urna justo arcu leo nulla velit condimentum. Ultricies neque pretium quisque sit vitae felis volutpat urna aliquet. Iaculis lacus diam sed platea morbi auctor sed cras. Habitasse lacus massa imperdiet sed nec habitant amet convallis. Commodo tristique sed faucibus netus. Volutpat lobortis at varius ac neque maecenas pellentesque.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="header w-full items-center justify-start"> 
                            <div className="h-auto py-[5px] justify-center items-center inline-flex">
                                <div className="w-[4vw] self-stretch border-t-4 border-color-orange" />
                            </div>
                            <h1 className='text-3xl font-bold capitalize mt-2'>Laporan lainnya</h1>
                            <Cards items={kegiatanItems} text={"Lihat semua kegiatan"}/>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </>
    )
}

export default Rincian