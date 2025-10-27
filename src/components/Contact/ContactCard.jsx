export default function ContactCard({ icon, title, detail }) {
    return (
        <div className="flex flex-col items-center text-center p-5 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition">
            <div className="p-3 bg-sky-100 rounded-full mb-3">{icon}</div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{detail}</p>
        </div>
    );
}
