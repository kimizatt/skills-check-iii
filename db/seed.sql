create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

insert into houses(name, address, city, state, zip, img, mortgage, rent)
values('Pemberley', '1 Darcy Lane,' 'Lambton', 'DS', 10001, 'https://simplycharly.com/wp-content/uploads/2016/11/Pemberly.jpg', 15000000, 20000),
('Haunted House', '13 Scary St.', 'Devilville', 'UT', 88888, 'https://amp.businessinsider.com/images/562fbe249dd7cc1b008c528d-750-498.jpg', 100000, 500);
