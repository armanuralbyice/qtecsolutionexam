'use client';

export function PopularRoles() {
    const roles = [
        'UI Designer',
        'UX Researcher',
        'Android',
        'Admin'
    ];

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm text-slate-600 font-medium">Popular:</span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
                {roles.map((role) => (
                    <button
                        key={role}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-full transition-colors duration-200"
                    >
                        {role}
                    </button>
                ))}
            </div>
        </div>
    );
}
