export = function cleanTypeName(name: string): string {
    if (!name) return name;
    return name.replace(/[,\[\]]/g, '');
}
