const musicList = [
    { id: "S001", title: "khong thay ngay ve", artist: "Đức Phúc", genre: "Pop", duration: "3:30" },
    { id: "S002", title: "chay ngay di", artist: "Sơn Tùng MTP", genre: "Pop", duration: "3:30" },
    { id: "S003", title: "bay gio em dang o dau", artist: "Hoa vinh", genre: "Pop", duration: "3:30" },
    { id: "S004", title: "tinh thanh", artist: "Trịnh Thăng Bình", genre: "Pop", duration: "3:30" },    
    { id: "S005", title: "yeu duong nguoi am phu", artist: "Đức Phúc", genre: "Rock", duration: "3:30" },

];

function addMusic() {
    let newId;

    do {
        newId = prompt("Nhập ID bài hát:");
        if (!newId) return;

        if (musicList.some(song => song.id === newId)) {
            alert("ID đã tồn tại");
            newId = null;
        }
    } while (!newId);

    let newTitle = prompt("Nhập tiêu đề bài hát:");
    if (!newTitle) return;

    let newArtist = prompt("Nhập tên nghệ sĩ:");
    if (!newArtist) return;

    if (musicList.some(song => 
        song.title.toLowerCase() === newTitle.toLowerCase() &&
        song.artist.toLowerCase() === newArtist.toLowerCase()
    )) {
        console.log("Bài hát đã tồn tại");
        return;
    }

    const validGenres = ['Pop', 'Rap', 'Ballad', 'Rock', 'Electronic', 'Indie'];
    let newGenre;

    do {
        newGenre = prompt("Nhập thể loại (Pop, Rap, Ballad, Rock, Electronic, Indie):");
        if (!newGenre) return;

        if (!validGenres.includes(newGenre)) {
            alert("Thể loại không hợp lệ");
            newGenre = null;
        }
    } while (!newGenre);

    let newDuration;
    const durationRegex = /^[0-9]+:[0-5][0-9]$/;

    do {
        newDuration = prompt("Nhập thời lượng (mm:ss):");
        if (!newDuration) return;

        if (!durationRegex.test(newDuration)) {
            alert("Thời lượng phải đúng định dạng mm:ss");
            newDuration = null;
        }
    } while (!newDuration);

    musicList.push({
        id: newId,
        title: newTitle,
        artist: newArtist,
        genre: newGenre,
        duration: newDuration
    });

    alert("Thêm bài hát thành công");
}

function removeMusicByTitle() {
    let title = prompt("Nhập tiêu đề bài hát cần xóa:");
    if (!title) return;

    let index = musicList.findIndex(song => 
        song.title.toLowerCase() === title.toLowerCase()
    );

    if (index === -1) {
        alert("Không tìm thấy bài hát!");
        return;
    }

    if (confirm("Bạn có chắc muốn xóa không?")) {
        musicList.splice(index, 1);
        alert("Xóa thành công!");
    }
}

function displayMusicList() {
    if (musicList.length === 0) {
        alert("Playlist đang trống.");
        return;
    }

    let playlistText = "===== DANH SÁCH BÀI HÁT =====\n";
    musicList.forEach(song => {
        playlistText += `ID: ${song.id} | Title: ${song.title} | Artist: ${song.artist} | Genre: ${song.genre} | Duration: ${song.duration}\n`;
    });
    alert(playlistText);
}

function updateMusicByTitle() {
    let title = prompt("Nhập tiêu đề bài hát cần cập nhật:");
    if (!title) return;

    let index = musicList.findIndex(song => 
        song.title.toLowerCase() === title.toLowerCase()
    );

    if (index === -1) {
        alert("Không tìm thấy bài hát");
        return;
    }

    let newTitle = prompt("Nhập tiêu đề mới:", musicList[index].title);
    if (!newTitle) return;

    let newArtist = prompt("Nhập tên nghệ sĩ mới:", musicList[index].artist);
    if (!newArtist) return;

    const validGenres = ['Pop', 'Rap', 'Ballad', 'Rock', 'Electronic', 'Indie'];
    let newGenre;

    do {
        newGenre = prompt("Nhập thể loại mới (Pop, Rap, Ballad, Rock, Electronic, Indie):", musicList[index].genre);
        if (!newGenre) return;

        if (!validGenres.includes(newGenre)) {
            alert("Thể loại không hợp lệ");
            newGenre = null;
        }
    } while (!newGenre);

    let newDuration;
    const durationRegex = /^[0-9]+:[0-5][0-9]$/;

    do {
        newDuration = prompt("Nhập thời lượng mới (mm:ss):", musicList[index].duration);
        if (!newDuration) return;

        if (!durationRegex.test(newDuration)) {
            alert("Thời lượng phải đúng định dạng mm:ss");
            newDuration = null;
        }
    } while (!newDuration);

    musicList[index] = {
        id: musicList[index].id,
        title: newTitle,
        artist: newArtist,
        genre: newGenre,
        duration: newDuration
    };

    alert("Cập nhật bài hát thành công");
}
function searchMusic() {
    let keyword = prompt("Nhập từ khóa tìm kiếm (tiêu đề hoặc nghệ sĩ):");
    if (!keyword) return;
    let results = musicList.filter(song => 
        song.title.toLowerCase().includes(keyword.toLowerCase()) ||
        song.artist.toLowerCase().includes(keyword.toLowerCase())
    );
    if (results.length === 0) {
        alert("Không tìm thấy bài hát nào!");
        return;
    }
    let resultText = " KẾT QUẢ TÌM KIẾM \n";
    results.forEach(song => {
        resultText += `ID: ${song.id} | Title: ${song.title} | Artist: ${song.artist} | Genre: ${song.genre} | Duration: ${song.duration}\n`;
    });
    alert(resultText);
}
function searchGenre() {
    const validGenres = ['Pop', 'Rap', 'Ballad', 'Rock', 'Electronic', 'Indie'];
    let genre;
    do {
        genre = prompt("Nhập thể loại cần tìm (Pop, Rap, Ballad, Rock, Electronic, Indie):");
        if (!genre) return;
        genre = genre.trim();
        // allow case‑insensitive match
        const normalized = validGenres.find(g => g.toLowerCase() === genre.toLowerCase());
        if (!normalized) {
            alert("Thể loại không hợp lệ");
            genre = null;
        } else {
            genre = normalized;
        }
    } while (!genre);

    let results = musicList.filter(song => song.genre === genre);
    if (results.length === 0) {
        alert("Không tìm thấy bài hát nào trong thể loại này!");
        return;
    }
    let resultText = `Kết quả : ${genre}\n`;
    results.forEach(song => {
        resultText += `ID: ${song.id} | Title: ${song.title} | Artist: ${song.artist} | Genre: ${song.genre} | Duration: ${song.duration}\n`;
    });
    alert(resultText);
}
function sumDuration() {
    let totalSeconds = musicList.reduce((total, song) => {
        let [minutes, seconds] = song.duration.split(':').map(Number);
        return total + minutes * 60 + seconds;
    }, 0);

    let totalMinutes = Math.floor(totalSeconds / 60);
    let remainingSeconds = totalSeconds % 60;
    return `${totalMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
let choice;

do {
    choice = prompt(
        "Chọn chức năng:\n" +
        "1. Thêm bài hát\n" +
        "2. Xóa bài hát\n" +
        "3. Hiển thị playlist\n" +
        "4. Cập nhật bài hát\n" +
        "5. Tìm kiếm bài hát\n" +
        "6. Tìm kiếm theo thể loại\n" +
        "7. Tổng thời lượng playlist\n" +
        "0. Thoát"
    );

    switch (choice) {
        case '1':
            addMusic();
            break;
        case '2':
            removeMusicByTitle();
            break;
        case '3':
            displayMusicList();
            break;
        case '4':
            updateMusicByTitle();
            break;
        case '5':
            searchMusic();
            break;
        case '6':
            searchGenre();
            break;
        case '7':
            alert("Tổng thời lượng playlist: " + sumDuration());
            break;
        case '0':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== '0');