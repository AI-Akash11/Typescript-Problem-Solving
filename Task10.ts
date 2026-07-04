interface UserAccount {
id: number;
username: string;
password: string;
}

type PublicUser = Omit<UserAccount, 'password'>;

const userInfo : PublicUser = {
    id: 123,
    username: "akash",
}