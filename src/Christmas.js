import React, { useEffect, useRef } from "react";
import "./styles.css";

const Christmas = () => {
    const audioRef = useRef(null); // Tạo ref cho audio

    // const playAudio = () => {
    //     if (audioRef.current) {
    //         audioRef.current.currentTime = 0; // Đặt lại thời gian phát về 0
    //         audioRef.current.play().catch(error => {
    //             console.error("Không thể phát âm thanh:", error);
    //         });
    //     }
    // };
    useEffect(() => {
        const playBackgroundMusic = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5; // Thiết lập âm lượng
                audioRef.current.play().catch(error => {
                    console.error("Không thể tự động phát nhạc:", error);
                });
            }
        };

        // Gọi phát nhạc sau khi component render
        playBackgroundMusic();

        // Tải script.js sau khi component được render
        const script = document.createElement("script");
        script.src = "/script.js"; // Đường dẫn tới file script.js
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Xóa script khi component bị unmount
            document.body.removeChild(script);
        };
    }, []);

    // const playAudio = () => {
    //     if (audioRef.current) {
    //         audioRef.current.currentTime = 0; // Đặt lại thời gian phát về 0
    //         audioRef.current.play().catch(error => {
    //             console.error("Không thể phát âm thanh:", error);
    //         });
    //     }
    // };

    return (
        <div>
             <audio ref={audioRef} src="giangsinh.mp3" loop></audio>

            {/* Thông báo Merry Christmas */}
            <div id="as" className="christmas-message">Merry Christmas</div>

            {/* Cây thông */}
            <div className="tree-container">
                <img
                    src="/big_tree.png"
                    alt="Cây thông"
                    className="tree-icon"
                />
            </div>

            {/* Nút hiển thị thiệp */}
            <div className="container">
                <button id="showButton">Gửi bé nè 🎄</button>
            </div>

            {/* Thiệp Giáng Sinh */}
            <div id="guideInfo" className="hidden">
                <button id="closeButton" className="close-btn">X</button>
                <div id="ax" className="card">
                    <div className="imgBox">
                        <div className="bark"></div>
                        <img src="/mery.png" alt="Merry" />
                    </div>
                    <div className="details">
                        <h4 className="color margin">MERRY CHRISTMAS</h4>
                        <p>Chào một Giáng Sinh có em !!!</p>
                        <p>Giáng Sinh năm nay, anh đã nhận được món quà
                            vô cùng quý giá mà anh may mắn có được.
                            Từ khi có em, mỗi ngày với anh đều là một ngày lễ,
                            tràn ngập yêu thương và hạnh phúc. Cảm ơn em đã luôn bên anh, làm cuộc sống anh thêm ý nghĩa. 
                            Anh chúc em bé của anh có một mùa Giáng Sinh an lành,
                            ấm áp và luôn rực rỡ như ánh đèn lấp lánh trên
                            những cây thông ngày Giáng Sinh.❤️</p>
                        <p className="text-right">Anh yêu em - Hoàng Giang 🌻</p>
                        <p className="text-right"> Minh Đức ❤️🌻</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Christmas;
