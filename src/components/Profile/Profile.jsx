import style from './Profile.module.css';


function Profile({name, tag, location, image, stats}) {
	return (
		<div className={style.item}>
			<div className={style.info}>
				<img
				className={style.img}
					src={image}
					alt={name}
				/>
				<p className={style.name}>{name}</p>
				<p className={style.text}>@{tag}</p>
				<p className={style.text}>{location}</p>
			</div>

			<ul className={style.stats}>
				<li className={style.statsItem}>
					<span>Followers</span>
					<span>{stats.followers}</span>
				</li>
				<li className={style.statsItem}>
					<span>Views</span>
					<span>{stats.views}</span>
				</li>
				<li className={style.statsItem}>
					<span>Likes</span>
					<span>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
}

export default Profile;
