let friends = [];

function addFriend() {
    let friend = document.getElementById('friend-name');

    if (friend.value == '') {
        alert("Enter friend's name");
        return;
    }

    if (friend.includes(friend.value)) {
        alert('Name already added!');
        return;
    }

    let friendList = document.getElementById('friends-list');
    friends.push(friend.value);

    if (friendList.textContent == '') {
        friendList.textContent = friend.value;
    } else {
        friendList.textContent = friendList.textContent + ', ' + friend.value;
    }

    friend.value = '';
}

function draw() {
    if (friends.length <= 3) {
        alert('Add at least 3 friends!');
        return;
    }

    shuffle(friends);
    let drawList = document.getElementById('draw-list');

    for (let i = 0; i < friends.length; i++) {
        let finalFriendIndex = i == friends.length-1 ? friends[0] : friends[i+1];
        drawList.innerHTML = drawList.innerHTML + `${friends[i]} --> ${finalFriendIndex}` + '<br>';
    }
}

function shuffle(list) {
    for (let index = list.length; index; index--) {
        const randomIndex = Math.floor(Math.random() * index);
        [list[index-1], list[randomIndex]] = [list[randomIndex], list[index-1]];
    }
}

function restart() {
    friends = [];
    document.getElementById('friends-list').innerHTML = '';
    document.getElementById('draw-list').innerHTML = '';
}