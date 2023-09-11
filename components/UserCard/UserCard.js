const UserCard = () => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" width="40" height="40" alt="Alex Shatov" /></div>
                    <div class="font-medium text-gray-800">Facebook</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">alexshatov@gmail.com</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium text-blue-500">5542179236</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center"><a>Ver mas</a></div>
            </td>
        </tr>
    );
}

export default UserCard;