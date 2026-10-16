Fetch all users. 

$users = User::all();

let userss = await prisma.user.findmany();

let page = 1 
limit = 10 

let orders = await prisma.order.findMany({
skip: (page - 1) * limit,     
take: limit, 
})
