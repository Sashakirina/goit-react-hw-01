import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
	return (
		<ul>
			{friends.map((friend) => {
				return (
					<FriendListItem
						key={friend.id}
						avatar={friend.avatar}
						userName={friend.name}
						isOnline={friend.isOnline}
					/>
				);
			})}
		</ul>
	);
}

export default FriendList;
